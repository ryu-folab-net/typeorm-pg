# Awesome Project Build with TypeORM

Steps to run this project:

## Concrete Table Inheritance

See [Concrete Table Inheritance](https://typeorm.io/entity-inheritance#concrete-table-inheritance)

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm run start:cti` command

## Single Table Inheritance

See [Single Table Inheritance](https://typeorm.io/entity-inheritance#single-table-inheritance)

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm run start:sti` command

## Execution Result

```
ryu@legolas:~/work/typeorm-pg (main) $ rm database.sqlite
```

```
ryu@legolas:~/work/typeorm-pg (main) $ npm run start:cti

> typeorm-pg@0.0.1 start:cti
> ts-node src/cti/index.ts

Inserting a new toiec into the database...
Saved a new toiec with id: 1
Loading toiecs from the database...
Loaded toiecs:  [
  Toiec {
    id: 1,
    examDate: LocalDate { year: 2023, month: 12, day: 3 },
    publOrg: '한국 TOEIC 위원회',
    reading: 88,
    listening: 69,
    user: User { id: 1, username: 'ryu' }
  }
]
Loading LanguageTests from the database...
Loaded LanguageTests:  []
Here you can setup and run express / fastify / any other framework.
ryu@legolas:~/work/typeorm-pg (main) $
```

```
ryu@legolas:~/work/typeorm-pg (main) $ npm run start:sti

> typeorm-pg@0.0.1 start:sti
> ts-node src/sti/index.ts

Inserting a new toiec into the database...
Saved a new toiec with id: 1
Loading toiecs from the database...
Loaded toiecs:  [
  Toiec {
    id: 1,
    examDate: LocalDate { year: 2023, month: 12, day: 3 },
    publOrg: '한국 TOEIC 위원회',
    reading: 88,
    listening: 69
  }
]
Loading LanguageTests from the database...
Loaded LanguageTests:  [
  Toiec {
    id: 1,
    examDate: LocalDate { year: 2023, month: 12, day: 3 },
    publOrg: '한국 TOEIC 위원회',
    reading: 88,
    listening: 69
  }
]
Here you can setup and run express / fastify / any other framework.
ryu@legolas:~/work/typeorm-pg (main) $
```