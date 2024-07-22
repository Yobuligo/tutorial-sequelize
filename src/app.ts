import { Certificate } from "./model/Certificate";
import { DriverLicense } from "./model/DriverLicense";
import { Person } from "./model/Person";

async function test() {
  await Person.sync({ alter: true });
  await DriverLicense.sync({ alter: true });
  await Certificate.sync({ alter: true });

  const driverLicense = await DriverLicense.create({
    classes: "A, B, C",
  } as any);

  const certificate = await Certificate.create({ title: "Sequelize" } as any);

  const person = await Person.create({
    firstname: "Stacey",
    lastname: "Starfish",
  } as any);

  person.setDriverLicense(driverLicense); // needs to be mapped to "driveLicense", as Sequelize creates a singular of the "driver" name, probably because of the 1 to 1 relation
  person.addCertificate(certificate);
}

test();
