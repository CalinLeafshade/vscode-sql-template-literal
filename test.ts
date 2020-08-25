function sql<T>(...rest): T {
  return {} as T;
}

type MyType = {
  myValue: string;
};

const query = sql`SELECT * FROM users`;

const table = "users";
const query2 = sql`SELECT * FROM ${table}`;

const query3 = sql<MyType>`SELECT * FROM ${table}`;
