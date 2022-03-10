import { ThrottlerGuard as BaseThrottlerGuard } from '@nestjs/throttler';
import { ExecutionContext } from '@nestjs/common';
export declare class ThrottlerGuard extends BaseThrottlerGuard {
    getRequestResponse(context: ExecutionContext): {
        req: any;
        res: any;
    };
}
