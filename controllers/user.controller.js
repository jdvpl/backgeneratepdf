const {response}=require('express')
const dataJson=require('../json/data.json')

const userGet=(req, res=response) => {
  const {q,api,name="Saitama"}=req.query;
  res.json(
    {
      "Get":"Desde el controller",
      q,
      api,
      name
    }
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

  const data=req.body;
  res.json(
    dataJson
    );
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
  userDelete
}