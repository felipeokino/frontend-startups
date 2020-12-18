const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express()
app.use(cors());

app.get('/startups', async (req, res) => {
  const respData = await fetch('https://5pnnhw5h8d.execute-api.us-east-1.amazonaws.com/v1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-api-key': 'gWhX2S1Qzj2SJVpFuSITV2FFBryWwCdf3T4FtAee',
    }
  })
  const resp = await respData.json();
  return res.json(resp);
})

app.get('/startups/:id', async (req, res) => {
  const { id } = req.params;
  const respData = await fetch(`https://5pnnhw5h8d.execute-api.us-east-1.amazonaws.com/v1/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-api-key': 'gWhX2S1Qzj2SJVpFuSITV2FFBryWwCdf3T4FtAee',
    }
  })
  const resp = await respData.json();
  console.log(resp)
  return res.json(resp);
})

app.listen(5000, () => {
  console.log("Server is running...")
})