import { LocalDate } from "../LocalDate"
import { AppDataSource } from "../data-source"
import { LanguageTest } from "./LanguageTest"
import { Toiec } from "./Toiec"
import { User } from "./User"

AppDataSource.initialize().then(async () => {

  let user = await (async () => {
    let storeUser = await AppDataSource.manager.findOne(User, {
      where: {
        id: 1,
      },
    });
    if (storeUser != null) {
      return storeUser;
    } else {
      const newUser = new User();
      newUser.username = "ryu";
      return AppDataSource.manager.save(newUser);
    }
  })();

    console.log("Inserting a new toiec into the database...")
    const toiec = new Toiec()
    toiec.user = user;
    toiec.examDate = new LocalDate(2023, 12, 3);
    toiec.publOrg = "한국 TOEIC 위원회";
    toiec.reading = 88;
    toiec.reading = 88;
    toiec.listening = 69;
    await AppDataSource.manager.save(toiec)
    console.log("Saved a new toiec with id: " + toiec.id)

    console.log("Loading toiecs from the database...")
    const toiecs = await AppDataSource.manager.find(Toiec, {
      relations: {
        user: true,
      },
    })
      console.log("Loaded toiecs: ", toiecs)

    console.log("Loading LanguageTests from the database...")
    const languageTests = await AppDataSource.manager.find(LanguageTest, {
      relations: {
        user: true,
      },
    })
    console.log("Loaded LanguageTests: ", languageTests)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
