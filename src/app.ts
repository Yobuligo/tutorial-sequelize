import { DriverLicense } from "./model/DriverLicense";
import { Person } from "./model/Person";

async function test() {
  await Person.sync();
  await DriverLicense.sync();

  const driverLicense = await DriverLicense.create({
    classes: "A, B, C",
  } as any);
  //   const certificate = await Certificate.create({ title: "Sequelize" } as any);
  const person = await Person.create({
    firstname: "Stacey",
    lastname: "Starfish",
  } as any);

  person.setDriveLicense(driverLicense); // needs to be mapped to "driveLicense", as Sequelize creates a singular of the "driver" name, probably because of the 1 to 1 relation
}

test();
