import { createServer } from "node:http";

// Local browser validation only: block website scripts without changing the app.
const upstream = new URL(process.env.PORTFOLIO_TEST_ORIGIN ?? "http://127.0.0.1:3100");
const port = Number(process.env.PORTFOLIO_NOSCRIPT_PORT ?? 3101);
const server = createServer(async (request, response) => {
  try {
    const target = new URL(request.url, upstream);
    if (target.origin !== upstream.origin) {
      response.writeHead(400).end();
      return;
    }
    const result = await fetch(target, { redirect: "manual", headers: { Accept: request.headers.accept ?? "*/*" } });
    const headers = Object.fromEntries(result.headers);
    for (const name of ["content-encoding", "content-length", "connection", "transfer-encoding"]) delete headers[name];
    headers["content-security-policy"] = "script-src 'none'; object-src 'none'";
    response.writeHead(result.status, headers);
    response.end(Buffer.from(await result.arrayBuffer()));
  } catch {
    response.writeHead(502, { "content-type": "text/plain" }).end("Local test proxy unavailable");
  }
});
server.listen(port, "127.0.0.1", () => console.log(`Script-blocked browser validation: http://127.0.0.1:${port}`));
