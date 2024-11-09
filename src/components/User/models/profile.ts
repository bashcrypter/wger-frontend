import { Adapter } from "utils/Adapter";

export class Profile {
    constructor(
        public username: string,
        public email: string,
        public emailVerified: boolean,
        public dateJoined: Date,
        public isTrustworthy: boolean,
        public useMetric: boolean
    ) {
    }
}

export class ProfileAdapter implements Adapter<Profile> {
    fromJson(item: any): Profile {
        return new Profile(
            item.username,
            item.email,
            item.email_verified,
            new Date(item.date_joined),
            item.is_trustworthy,
            item.weight_unit === 'kg'
        );
    }

    toJson(item: Profile) {
        return {
            email: item.email,
            weight_unit: item.useMetric ? 'kg' : 'lb',
        };
    }
}