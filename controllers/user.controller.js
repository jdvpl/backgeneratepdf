const {response}=require('express')
const dataJson=require('../json/offices.json')

const userGet=(req, res=response) => {
  const data =dataJson;
  const info= data.response.filter((d)=>d.idCity!=='05045' && d.idCity!=="81001");
  res.json(
    info
    );
}

const userPut=(req, res=response) => {
  const id=req.params.id;
  console.log(id);
  res.json(
    {
      "Put":"aa"
    }
    );
}
const userPost=(req, res) => {

  const {govIssueIdentType,
    identSerialNum}=req.body;
    let data={};
    if(identSerialNum==="1077870326"){
      data={ "birthDt": "1995-05-27",
      "cellPhone": "320●●●●●●8",
      "emailAddr": "ju●●●●2@hotmail.com",
      "addr1": "",
      "currentCity": "11001",
      "birthCity": "11001",
      "firstName": "Daniel",
      "isClient": false}
    }else if(identSerialNum=='1022404222'){
      data={ 
      "birthDt": "1986-06-29",
      "cellPhone": "320●●●●●●2",
      "emailAddr": "ca●●●●●●5@hotmail.com",
      "addr1": "CL 89g#103-62",
      "currentCity": "11001",
      "birthCity": "11001",
      "firstName": "Juan",
      "isClient": true}
    }else{
      data={ "birthDt": "1986-06-29",
      "cellPhone": "320●●●●●●2",
      "emailAddr": "cam●●●●●●7@hotmail.com",
      "addr1": "CL 89g#103-62",
      "currentCity": "11001",
      "birthCity": "11001",
      "firstName": "Camilo",
      "isClient": false}

    }
  res.json(
    data
    );
}
const basicData=(req,res)=>{
  const {identSerialNum}=req.body;
  let data;
  if(identSerialNum==="1077870326"){
    data={
      "birthDt": "1995-05-27",
      "cellPhone": "3209188638",
      "emailAddr": "juanda5542@hotmail.com",
      "addr1": "CL 69g#67-62",
      "city": "11001",
      "firstName": "Daniel",
      "isClient": false
    }
  }else if(identSerialNum==="1022404222"){
    data={
      "birthDt": "1995-06-13",
      "cellPhone": "3209188638",
      "emailAddr": "camilo2345@hotmail.com",
      "addr1": "CL 69g#67-62",
      "city": "11001",
      "firstName": "Juan",
      "isClient": true
    }
  }else{
    data={
      "birthDt": "1995-05-27",
      "cellPhone": "3209188638",
      "emailAddr": "eyner@hotmail.com",
      "addr1": "CL 69g#67-62",
      "city": "11001",
      "firstName": "Eyner",
      "isClient": false
    }
  }
  return res.json(data)
}

const userAnswer=(req,res)=>{
  const {document_number}=req.body;
  console.log(req.body)
  let data;
  if(document_number==="1018422010"){
    data={
      "step": "AUTH",
      "key": "bea35950-c522-45aa-97ea-a183c4817cb5",
      "type": "CLOSED-QUESTION",
      "description": "Seleccione su número de celular",
      "options": [
          {
              "id": "2d5e49c8-82ab-49d3-a042-ecc73d61b63f",
              "option": "3142●●●●77"
          },
          {
              "id": "fe84a00b-c0e5-48d2-9231-dd730e18ed00",
              "option": "3183●●●●27"
          },
          {
              "id": "9649a6ca-fc59-4d95-a01c-79b78117779a",
              "option": "3142●●●●88"
          },
          {
              "id": "f22021d8-0d1c-4cca-9c9e-dda7b691341e",
              "option": "Ninguno"
          }
      ]
  }
  }else{
    data={
      "step": "VQ",
      "key": "bea35950-c522-45aa-97ea-a183c4817cb5",
      "type": "CLOSED-QUESTION",
      "description": "Seleccione su número de celular",
      "options": [
          {
              "id": "2d5e49c8-82ab-49d3-a042-ecc73d61b63f",
              "option": "3142●●●●77"
          },
          {
              "id": "fe84a00b-c0e5-48d2-9231-dd730e18ed00",
              "option": "3183●●●●27"
          },
          {
              "id": "9649a6ca-fc59-4d95-a01c-79b78117779a",
              "option": "3142●●●●88"
          },
          {
              "id": "f22021d8-0d1c-4cca-9c9e-dda7b691341e",
              "option": "Ninguno"
          }
      ]
  }
  }
  res.json(data)
}
const userDelete=(req, res) => {
  res.json(
    {
      "Delete":"aa"
    }
    );
}


module.exports ={
  userGet,
  userPut,
  userPost,
  userDelete,
  userAnswer,
  basicData
}