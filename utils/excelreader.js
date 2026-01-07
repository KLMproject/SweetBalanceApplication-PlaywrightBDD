import ExcelJS from 'exceljs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class ExcelReader {
  constructor(filePath = path.join(__dirname, '../Test-Data.xlsx')) {
    this.filePath = filePath;
    this.loaded = false;

    this.login = null;            // from sheet "Login"
    this.profileWithBR = null;    // from sheet "ProfileWithBR"
    this.profileWithoutBR = null; // from sheet "ProfileWithoutBR"
  }

  async loadSheets() {
    if (this.loaded) return;

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(this.filePath);

    this.loadLoginSheet(workbook);
    this.loadProfileWithBRSheet(workbook);
    this.loadProfileWithoutBRSheet(workbook);

    this.loaded = true;
  }

  // Sheet 1: Login (INVALID_EMAIL, VALID_EMAIL, PASSWORD)
  loadLoginSheet(workbook) {
    const sheet = workbook.getWorksheet('Login');
    if (!sheet) {
      throw new Error(`Sheet 'Login' not found in ${this.filePath}`);
    }

    const row = sheet.getRow(2); // row 1 = header, row 2 = data
    const [INVALID_EMAIL, VALID_EMAIL, PASSWORD] = row.values.slice(1);

    this.login = {
      INVALID_EMAIL,
      VALID_EMAIL,
      PASSWORD
    };
  }

  // Sheet 2: ProfileWithBR (VALID_NEW_EMAIL, FULLNAME, USERNAME, PROFILE_PASSWORD)
  loadProfileWithBRSheet(workbook) {
    const sheet = workbook.getWorksheet('ProfileWithBR');
    if (!sheet) {
      throw new Error(`Sheet 'ProfileWithBR' not found in ${this.filePath}`);
    }

    const row = sheet.getRow(2);
    const [VALID_NEW_EMAIL, FULLNAME, USERNAME, PROFILE_PASSWORD] =
      row.values.slice(1);

    this.profileWithBR = {
      VALID_NEW_EMAIL,
      FULLNAME,
      USERNAME,
      PROFILE_PASSWORD
    };
  }

  // Sheet 3: ProfileWithoutBR (VALID_NEW_EMAIL, FULLNAME, USERNAME, PROFILE_PASSWORD)
  loadProfileWithoutBRSheet(workbook) {
    const sheet = workbook.getWorksheet('ProfileWithoutBR');
    if (!sheet) {
      throw new Error(`Sheet 'ProfileWithoutBR' not found in ${this.filePath}`);
    }

    const row = sheet.getRow(2);
    const [VALID_NEW_EMAIL, FULLNAME, USERNAME, PROFILE_PASSWORD] =
      row.values.slice(1);

    this.profileWithoutBR = {
      VALID_NEW_EMAIL,
      FULLNAME,
      USERNAME,
      PROFILE_PASSWORD
    };
  }

  async getLogin() {
    await this.loadSheets();
    return this.login;
  }

  async getProfileWithBR() {
    await this.loadSheets();
    return this.profileWithBR;
  }

  async getProfileWithoutBR() {
    await this.loadSheets();
    return this.profileWithoutBR;
  }
}
