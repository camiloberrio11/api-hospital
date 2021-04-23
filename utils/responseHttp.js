const responseHTTP = (code, dataResponse, message, ok, res) => {
  return res.status(code).json({
    ok,
    message,
    data: dataResponse,
  });
};

module.exports = {
  responseHTTP,
};

/*
Datatype responseHTTP
ok: boolean
msg: string,
code: number,
dataResponse: any[]
*/
