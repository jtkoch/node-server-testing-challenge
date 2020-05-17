const supertest = require("supertest")
const server = require("../index")
const db = require("../data/config")

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async() => {
  await db.destroy()
})

describe("dogs integration tests", () => {
  it("GET /dogs", async () => {
    const res = await supertest(server).get("/dogs")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body).toHaveLength(4)
    expect(res.body[0].breed).toBe("weimaraner")
    expect(res.body[1].breed).toBe("basset hound")
  })

  it("GET /dogs/:id", async () => {
    const res = await supertest(server).get("/dogs/50")
    expect(res.statusCode).toBe(404)
  })

  it("GET /dogs/:id (not found)", async () => {
    const res = await supertest(server).get("/dogs/2")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.breed).toBe("basset hound")
  })

  it("POST /dogs", async () => {
    const data = { breed: "australian shepherd" }
    const res = await supertest(server).post("/dogs").send(data)
    expect(res.statusCode).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.breed).toBe("australian shepherd")
  })

})
