const {response}=require('express');
const { allResponseDecrypted, allResponse } = require('../utils/AES');

const Key=process.env.KEYKYCHASH;
const validatethirdQuestion=async(req, res=response) => {
  const {data}=req.body;
  const info=await allResponseDecrypted(data,Key);
  const {document_number}=info;
  if(document_number==="1077870326"){
    const dati=allResponse({phone:'3156●●●●70'},Key);
    console.log(dati)
    return res.status(200).json({data:dati})
  }else{
    const dati=allResponse({phone:'3213●●●●15'},Key);
    return res.status(200).json({data:dati})
  }
}
const videntityUserPin=async(req, res=response) => {
  const {data}=req.body;
  const info=await allResponseDecrypted(data,Key);
  const {document_number,pin}=info;
  if(document_number==="1077870326" && pin==='123456'){
    const dati=allResponse({res:'OK'},Key);
    console.log(dati)
    return res.status(200).json({data:dati})
  }else if(document_number==="1022404222" && pin==="987654"){
    const dati=allResponse({res:'OK'},Key);
    return res.status(200).json({data:dati})
  }else{
    const da=allResponse({res:'Ivalid_Code'},Key)
    return res.status(404).json({data:da})
  }
}

const reSendOTPCode=async(req, res=response) => {
  const {data}=req.body;
  return res.json(data);
}

module.exports={validatethirdQuestion,videntityUserPin,reSendOTPCode}