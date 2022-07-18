import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus, Inject } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "./entities/roles.enum";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        try {
            const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
                context.getHandler(),
                context.getClass(),
            ]);

            //Faz com que a api não seja publica e verifica a role do usuario!
            const token = context.switchToHttp().getRequest().query;

            const usersAllowed = [
                {
                    user: 'renato',
                    userToken: '62d4f06f183e4b5b2d15bb2d',
                    role: 'admin',
                },
                {
                    user: 'francisco',
                    userToken: '62d4f07e183e4b5b2d15bb2f',
                    role: 'student',
                },
                {
                    user: 'matheus',
                    userToken: '62d4f083183e4b5b2d15bb31',
                    role: 'student'
                }
            ];

            const user = usersAllowed.find(user => user.userToken === token.token).role;

            //Se o usuario não existe lança uma exception 
            if (!user) {
                throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
            }

            if (!requiredRoles) {
                return true;
            }

            return requiredRoles.some(role => user.includes(role));
        } catch {
            throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
        }
    }
}