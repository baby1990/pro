/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../context"
import * as photon from "@prisma/photon"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BooleanFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: boolean | null; // Boolean
  }
  DateTimeFilter: { // input type
    equals?: any | null; // DateTime
    gt?: any | null; // DateTime
    gte?: any | null; // DateTime
    in?: any[] | null; // [DateTime!]
    lt?: any | null; // DateTime
    lte?: any | null; // DateTime
    not?: any | null; // DateTime
    notIn?: any[] | null; // [DateTime!]
  }
  DocumentCreateManyWithoutDocumentsCollectedInput: { // input type
    connect?: NexusGenInputs['DocumentWhereUniqueInput'][] | null; // [DocumentWhereUniqueInput!]
    create?: NexusGenInputs['DocumentCreateWithoutCollectorsInput'][] | null; // [DocumentCreateWithoutCollectorsInput!]
  }
  DocumentCreateManyWithoutDocumentsInput: { // input type
    connect?: NexusGenInputs['DocumentWhereUniqueInput'][] | null; // [DocumentWhereUniqueInput!]
    create?: NexusGenInputs['DocumentCreateWithoutAuthorInput'][] | null; // [DocumentCreateWithoutAuthorInput!]
  }
  DocumentCreateOneWithoutDocumentInput: { // input type
    connect?: NexusGenInputs['DocumentWhereUniqueInput'] | null; // DocumentWhereUniqueInput
    create?: NexusGenInputs['DocumentCreateWithoutFilesInput'] | null; // DocumentCreateWithoutFilesInput
  }
  DocumentCreateWithoutAuthorInput: { // input type
    collectors?: NexusGenInputs['UserCreateManyWithoutCollectorsInput'] | null; // UserCreateManyWithoutCollectorsInput
    content?: string | null; // String
    contentRaw?: string | null; // String
    createdAt?: any | null; // DateTime
    draft?: string | null; // String
    files?: NexusGenInputs['FileCreateManyWithoutFilesInput'] | null; // FileCreateManyWithoutFilesInput
    isPublic?: boolean | null; // Boolean
    likeCount?: number | null; // Int
    readCount?: number | null; // Int
    subject: string; // String!
    updatedAt?: any | null; // DateTime
  }
  DocumentCreateWithoutCollectorsInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutAuthorInput'] | null; // UserCreateOneWithoutAuthorInput
    content?: string | null; // String
    contentRaw?: string | null; // String
    createdAt?: any | null; // DateTime
    draft?: string | null; // String
    files?: NexusGenInputs['FileCreateManyWithoutFilesInput'] | null; // FileCreateManyWithoutFilesInput
    isPublic?: boolean | null; // Boolean
    likeCount?: number | null; // Int
    readCount?: number | null; // Int
    subject: string; // String!
    updatedAt?: any | null; // DateTime
  }
  DocumentCreateWithoutFilesInput: { // input type
    author?: NexusGenInputs['UserCreateOneWithoutAuthorInput'] | null; // UserCreateOneWithoutAuthorInput
    collectors?: NexusGenInputs['UserCreateManyWithoutCollectorsInput'] | null; // UserCreateManyWithoutCollectorsInput
    content?: string | null; // String
    contentRaw?: string | null; // String
    createdAt?: any | null; // DateTime
    draft?: string | null; // String
    isPublic?: boolean | null; // Boolean
    likeCount?: number | null; // Int
    readCount?: number | null; // Int
    subject: string; // String!
    updatedAt?: any | null; // DateTime
  }
  DocumentFilter: { // input type
    every?: NexusGenInputs['DocumentWhereInput'] | null; // DocumentWhereInput
    none?: NexusGenInputs['DocumentWhereInput'] | null; // DocumentWhereInput
    some?: NexusGenInputs['DocumentWhereInput'] | null; // DocumentWhereInput
  }
  DocumentOrderByInput: { // input type
    content?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    contentRaw?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    createdAt?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    draft?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    id?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    isPublic?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    likeCount?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    readCount?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    subject?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    updatedAt?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  DocumentWhereInput: { // input type
    AND?: NexusGenInputs['DocumentWhereInput'][] | null; // [DocumentWhereInput!]
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    collectors?: NexusGenInputs['UserFilter'] | null; // UserFilter
    content?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    contentRaw?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    draft?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    files?: NexusGenInputs['FileFilter'] | null; // FileFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    isPublic?: NexusGenInputs['BooleanFilter'] | null; // BooleanFilter
    likeCount?: NexusGenInputs['IntFilter'] | null; // IntFilter
    NOT?: NexusGenInputs['DocumentWhereInput'][] | null; // [DocumentWhereInput!]
    OR?: NexusGenInputs['DocumentWhereInput'][] | null; // [DocumentWhereInput!]
    readCount?: NexusGenInputs['IntFilter'] | null; // IntFilter
    subject?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  DocumentWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  FileCreateManyWithoutFilesInput: { // input type
    connect?: NexusGenInputs['FileWhereUniqueInput'][] | null; // [FileWhereUniqueInput!]
    create?: NexusGenInputs['FileCreateWithoutDocumentInput'][] | null; // [FileCreateWithoutDocumentInput!]
  }
  FileCreateOneWithoutAvatarInput: { // input type
    connect?: NexusGenInputs['FileWhereUniqueInput'] | null; // FileWhereUniqueInput
    create?: NexusGenInputs['FileCreateWithoutUserInput'] | null; // FileCreateWithoutUserInput
  }
  FileCreateWithoutDocumentInput: { // input type
    alias?: string | null; // String
    contentType: string; // String!
    createdAt?: any | null; // DateTime
    eTag: string; // String!
    name: string; // String!
    size: number; // Int!
    updatedAt?: any | null; // DateTime
    url: string; // String!
    user?: NexusGenInputs['UserCreateOneWithoutUserInput'] | null; // UserCreateOneWithoutUserInput
  }
  FileCreateWithoutUserInput: { // input type
    alias?: string | null; // String
    contentType: string; // String!
    createdAt?: any | null; // DateTime
    document?: NexusGenInputs['DocumentCreateOneWithoutDocumentInput'] | null; // DocumentCreateOneWithoutDocumentInput
    eTag: string; // String!
    name: string; // String!
    size: number; // Int!
    updatedAt?: any | null; // DateTime
    url: string; // String!
  }
  FileFilter: { // input type
    every?: NexusGenInputs['FileWhereInput'] | null; // FileWhereInput
    none?: NexusGenInputs['FileWhereInput'] | null; // FileWhereInput
    some?: NexusGenInputs['FileWhereInput'] | null; // FileWhereInput
  }
  FileInputType: { // input type
    contentType: string; // String!
    eTag: string; // String!
    name: string; // String!
    size: number; // Int!
    url: string; // String!
  }
  FileWhereInput: { // input type
    alias?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    AND?: NexusGenInputs['FileWhereInput'][] | null; // [FileWhereInput!]
    contentType?: NexusGenInputs['StringFilter'] | null; // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    document?: NexusGenInputs['DocumentWhereInput'] | null; // DocumentWhereInput
    eTag?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['FileWhereInput'][] | null; // [FileWhereInput!]
    OR?: NexusGenInputs['FileWhereInput'][] | null; // [FileWhereInput!]
    size?: NexusGenInputs['IntFilter'] | null; // IntFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  FileWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    alias?: string | null; // String
    avatar?: NexusGenInputs['FileCreateOneWithoutAvatarInput'] | null; // FileCreateOneWithoutAvatarInput
    createdAt?: any | null; // DateTime
    desc?: string | null; // String
    documents?: NexusGenInputs['DocumentCreateManyWithoutDocumentsInput'] | null; // DocumentCreateManyWithoutDocumentsInput
    documentsCollected?: NexusGenInputs['DocumentCreateManyWithoutDocumentsCollectedInput'] | null; // DocumentCreateManyWithoutDocumentsCollectedInput
    name: string; // String!
    password?: string | null; // String
    phone?: string | null; // String
    sex?: NexusGenEnums['Sex'] | null; // Sex
    unionId: string; // String!
    updatedAt?: any | null; // DateTime
  }
  UserCreateManyWithoutCollectorsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    create?: NexusGenInputs['UserCreateWithoutDocumentsCollectedInput'][] | null; // [UserCreateWithoutDocumentsCollectedInput!]
  }
  UserCreateOneWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutDocumentsInput'] | null; // UserCreateWithoutDocumentsInput
  }
  UserCreateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutAvatarInput'] | null; // UserCreateWithoutAvatarInput
  }
  UserCreateWithoutAvatarInput: { // input type
    alias?: string | null; // String
    createdAt?: any | null; // DateTime
    desc?: string | null; // String
    documents?: NexusGenInputs['DocumentCreateManyWithoutDocumentsInput'] | null; // DocumentCreateManyWithoutDocumentsInput
    documentsCollected?: NexusGenInputs['DocumentCreateManyWithoutDocumentsCollectedInput'] | null; // DocumentCreateManyWithoutDocumentsCollectedInput
    name: string; // String!
    password?: string | null; // String
    phone?: string | null; // String
    sex?: NexusGenEnums['Sex'] | null; // Sex
    unionId: string; // String!
    updatedAt?: any | null; // DateTime
  }
  UserCreateWithoutDocumentsCollectedInput: { // input type
    alias?: string | null; // String
    avatar?: NexusGenInputs['FileCreateOneWithoutAvatarInput'] | null; // FileCreateOneWithoutAvatarInput
    createdAt?: any | null; // DateTime
    desc?: string | null; // String
    documents?: NexusGenInputs['DocumentCreateManyWithoutDocumentsInput'] | null; // DocumentCreateManyWithoutDocumentsInput
    name: string; // String!
    password?: string | null; // String
    phone?: string | null; // String
    sex?: NexusGenEnums['Sex'] | null; // Sex
    unionId: string; // String!
    updatedAt?: any | null; // DateTime
  }
  UserCreateWithoutDocumentsInput: { // input type
    alias?: string | null; // String
    avatar?: NexusGenInputs['FileCreateOneWithoutAvatarInput'] | null; // FileCreateOneWithoutAvatarInput
    createdAt?: any | null; // DateTime
    desc?: string | null; // String
    documentsCollected?: NexusGenInputs['DocumentCreateManyWithoutDocumentsCollectedInput'] | null; // DocumentCreateManyWithoutDocumentsCollectedInput
    name: string; // String!
    password?: string | null; // String
    phone?: string | null; // String
    sex?: NexusGenEnums['Sex'] | null; // Sex
    unionId: string; // String!
    updatedAt?: any | null; // DateTime
  }
  UserFilter: { // input type
    every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserOrderByInput: { // input type
    alias?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    createdAt?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    desc?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    id?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    name?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    password?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    phone?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    sex?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    unionId?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
    updatedAt?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  UserWhereInput: { // input type
    alias?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    avatar?: NexusGenInputs['FileWhereInput'] | null; // FileWhereInput
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    desc?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    documents?: NexusGenInputs['DocumentFilter'] | null; // DocumentFilter
    documentsCollected?: NexusGenInputs['DocumentFilter'] | null; // DocumentFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    phone?: NexusGenInputs['NullableStringFilter'] | null; // NullableStringFilter
    sex?: NexusGenEnums['Sex'] | null; // Sex
    unionId?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  UserWhereUniqueInput: { // input type
    id?: number | null; // Int
    name?: string | null; // String
    phone?: string | null; // String
    unionId?: string | null; // String
  }
}

export interface NexusGenEnums {
  OrderByArg: photon.OrderByArg
  Sex: photon.Sex
}

export interface NexusGenRootTypes {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Document: photon.Document;
  File: photon.File;
  MsgData: { // root type
    code: string; // String!
    message: string; // String!
  }
  Mutation: {};
  OSSPolicy: { // root type
    accessId: string; // String!
    dir: string; // String!
    expire: string; // String!
    host: string; // String!
    policy: string; // String!
    signature: string; // String!
  }
  Query: {};
  User: photon.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  BooleanFilter: NexusGenInputs['BooleanFilter'];
  DateTimeFilter: NexusGenInputs['DateTimeFilter'];
  DocumentCreateManyWithoutDocumentsCollectedInput: NexusGenInputs['DocumentCreateManyWithoutDocumentsCollectedInput'];
  DocumentCreateManyWithoutDocumentsInput: NexusGenInputs['DocumentCreateManyWithoutDocumentsInput'];
  DocumentCreateOneWithoutDocumentInput: NexusGenInputs['DocumentCreateOneWithoutDocumentInput'];
  DocumentCreateWithoutAuthorInput: NexusGenInputs['DocumentCreateWithoutAuthorInput'];
  DocumentCreateWithoutCollectorsInput: NexusGenInputs['DocumentCreateWithoutCollectorsInput'];
  DocumentCreateWithoutFilesInput: NexusGenInputs['DocumentCreateWithoutFilesInput'];
  DocumentFilter: NexusGenInputs['DocumentFilter'];
  DocumentOrderByInput: NexusGenInputs['DocumentOrderByInput'];
  DocumentWhereInput: NexusGenInputs['DocumentWhereInput'];
  DocumentWhereUniqueInput: NexusGenInputs['DocumentWhereUniqueInput'];
  FileCreateManyWithoutFilesInput: NexusGenInputs['FileCreateManyWithoutFilesInput'];
  FileCreateOneWithoutAvatarInput: NexusGenInputs['FileCreateOneWithoutAvatarInput'];
  FileCreateWithoutDocumentInput: NexusGenInputs['FileCreateWithoutDocumentInput'];
  FileCreateWithoutUserInput: NexusGenInputs['FileCreateWithoutUserInput'];
  FileFilter: NexusGenInputs['FileFilter'];
  FileInputType: NexusGenInputs['FileInputType'];
  FileWhereInput: NexusGenInputs['FileWhereInput'];
  FileWhereUniqueInput: NexusGenInputs['FileWhereUniqueInput'];
  IntFilter: NexusGenInputs['IntFilter'];
  NullableStringFilter: NexusGenInputs['NullableStringFilter'];
  StringFilter: NexusGenInputs['StringFilter'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreateManyWithoutCollectorsInput: NexusGenInputs['UserCreateManyWithoutCollectorsInput'];
  UserCreateOneWithoutAuthorInput: NexusGenInputs['UserCreateOneWithoutAuthorInput'];
  UserCreateOneWithoutUserInput: NexusGenInputs['UserCreateOneWithoutUserInput'];
  UserCreateWithoutAvatarInput: NexusGenInputs['UserCreateWithoutAvatarInput'];
  UserCreateWithoutDocumentsCollectedInput: NexusGenInputs['UserCreateWithoutDocumentsCollectedInput'];
  UserCreateWithoutDocumentsInput: NexusGenInputs['UserCreateWithoutDocumentsInput'];
  UserFilter: NexusGenInputs['UserFilter'];
  UserOrderByInput: NexusGenInputs['UserOrderByInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  OrderByArg: NexusGenEnums['OrderByArg'];
  Sex: NexusGenEnums['Sex'];
}

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Document: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    collectors: NexusGenRootTypes['User'][]; // [User!]!
    content: string | null; // String
    contentRaw: string | null; // String
    createdAt: any; // DateTime!
    draft: string | null; // String
    files: NexusGenRootTypes['File'][]; // [File!]!
    id: number; // Int!
    isDraft: boolean; // Boolean!
    isPublic: boolean; // Boolean!
    isPublish: boolean; // Boolean!
    likeCount: number; // Int!
    readCount: number; // Int!
    subject: string; // String!
    updatedAt: any; // DateTime!
  }
  File: { // field return type
    alias: string | null; // String
    contentType: string; // String!
    createdAt: any; // DateTime!
    document: NexusGenRootTypes['Document'] | null; // Document
    id: number; // Int!
    name: string; // String!
    size: number; // Int!
    updatedAt: any; // DateTime!
    url: string; // String!
  }
  MsgData: { // field return type
    code: string; // String!
    message: string; // String!
  }
  Mutation: { // field return type
    createOneUser: NexusGenRootTypes['User']; // User!
    deleteDocument: NexusGenRootTypes['Document']; // Document!
    documentCollect: NexusGenRootTypes['Document']; // Document!
    documentLike: NexusGenRootTypes['Document']; // Document!
    documentPublish: NexusGenRootTypes['Document']; // Document!
    getOSSPolicy: NexusGenRootTypes['OSSPolicy']; // OSSPolicy!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    uploadDocFile: NexusGenRootTypes['File']; // File!
  }
  OSSPolicy: { // field return type
    accessId: string; // String!
    dir: string; // String!
    expire: string; // String!
    host: string; // String!
    policy: string; // String!
    signature: string; // String!
  }
  Query: { // field return type
    document: NexusGenRootTypes['Document'] | null; // Document
    documents: NexusGenRootTypes['Document'][]; // [Document!]!
    file: NexusGenRootTypes['File'] | null; // File
    files: NexusGenRootTypes['File'][]; // [File!]!
    me: NexusGenRootTypes['User'] | null; // User
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    alias: string | null; // String
    avatar: NexusGenRootTypes['File'] | null; // File
    createdAt: any; // DateTime!
    desc: string | null; // String
    documents: NexusGenRootTypes['Document'][]; // [Document!]!
    documentsCollected: NexusGenRootTypes['Document'][]; // [Document!]!
    id: number; // Int!
    name: string; // String!
    phone: string | null; // String
    sex: NexusGenEnums['Sex'] | null; // Sex
    updatedAt: any; // DateTime!
  }
}

export interface NexusGenArgTypes {
  Document: {
    collectors: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    files: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Mutation: {
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteDocument: { // args
      id: number; // Int!
    }
    documentCollect: { // args
      id: number; // Int!
    }
    documentLike: { // args
      id: number; // Int!
    }
    documentPublish: { // args
      content: string; // String!
      contentRaw: string; // String!
      draft?: string | null; // String
      id?: number | null; // Int
      isPublish: boolean; // Boolean!
      subject: string; // String!
    }
    login: { // args
      name: string; // String!
      password: string; // String!
    }
    signup: { // args
      alias?: string | null; // String
      name: string; // String!
      password: string; // String!
    }
    uploadDocFile: { // args
      contentType: string; // String!
      eTag: string; // String!
      id: number; // Int!
      name: string; // String!
      size: number; // Int!
      url: string; // String!
    }
  }
  Query: {
    document: { // args
      where: NexusGenInputs['DocumentWhereUniqueInput']; // DocumentWhereUniqueInput!
    }
    documents: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['DocumentOrderByInput'] | null; // DocumentOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['DocumentWhereInput'] | null; // DocumentWhereInput
    }
    file: { // args
      where: NexusGenInputs['FileWhereUniqueInput']; // FileWhereUniqueInput!
    }
    files: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  User: {
    documents: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['DocumentOrderByInput'] | null; // DocumentOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['DocumentWhereInput'] | null; // DocumentWhereInput
    }
    documentsCollected: { // args
      after?: number | null; // Int
      before?: number | null; // Int
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['DocumentOrderByInput'] | null; // DocumentOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['DocumentWhereInput'] | null; // DocumentWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AuthPayload" | "Document" | "File" | "MsgData" | "Mutation" | "OSSPolicy" | "Query" | "User";

export type NexusGenInputNames = "BooleanFilter" | "DateTimeFilter" | "DocumentCreateManyWithoutDocumentsCollectedInput" | "DocumentCreateManyWithoutDocumentsInput" | "DocumentCreateOneWithoutDocumentInput" | "DocumentCreateWithoutAuthorInput" | "DocumentCreateWithoutCollectorsInput" | "DocumentCreateWithoutFilesInput" | "DocumentFilter" | "DocumentOrderByInput" | "DocumentWhereInput" | "DocumentWhereUniqueInput" | "FileCreateManyWithoutFilesInput" | "FileCreateOneWithoutAvatarInput" | "FileCreateWithoutDocumentInput" | "FileCreateWithoutUserInput" | "FileFilter" | "FileInputType" | "FileWhereInput" | "FileWhereUniqueInput" | "IntFilter" | "NullableStringFilter" | "StringFilter" | "UserCreateInput" | "UserCreateManyWithoutCollectorsInput" | "UserCreateOneWithoutAuthorInput" | "UserCreateOneWithoutUserInput" | "UserCreateWithoutAvatarInput" | "UserCreateWithoutDocumentsCollectedInput" | "UserCreateWithoutDocumentsInput" | "UserFilter" | "UserOrderByInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "OrderByArg" | "Sex";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}