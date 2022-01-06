export default async function GetToken(req, res) {
  const { cookies, query, body } = req;
  console.log('CoOkIeS: ', cookies);
  console.log('QuErY: ', query);
  console.log('BoDy: ', body);
  const delay = async (amount = 7500) =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve('ESTE Token enviado através de uma requisição ajax'),
        amount
      )
    );
  const token = await delay();
  res.status(200).send({ token: token, cookies, body, query });
}
