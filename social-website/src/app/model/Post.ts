export interface Post {
    id: number;
    userId: number;
    description?: string;
    photoUrl?: string;
    dateCreated: Date;
    dateModified: Date;
  }
  