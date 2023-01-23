
const CryptoJS=require('crypto-js')

const decryptPass = (password, key) => {
  const bytes = CryptoJS.AES.decrypt(password, key);

  if (bytes.sigBytes < 0) {
    throw new Error('Invalid credentials');
  }

  return bytes.toString(CryptoJS.enc.Utf8);
};

const allResponseDecrypted = (data, keys) => {
  const dataDecrypted = decryptPass(data, keys);
  return JSON.parse(dataDecrypted);
};

const encriptPass = (password, key) => {
  return CryptoJS.AES.encrypt(password, key).toString();
};

const allResponse = (data, keys) => {
  const dataToString = JSON.stringify(data);
  const dataEncrypted = encriptPass(dataToString, keys);
  return dataEncrypted;
};

module.exports={
  allResponseDecrypted,
  allResponse
}