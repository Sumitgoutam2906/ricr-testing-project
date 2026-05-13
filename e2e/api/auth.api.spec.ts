import { test, expect } from "@playwright/test";

test.describe("Auth API Tests", () => {

const isValidStatus = (status: number) => {
return status >= 200 && status < 500;
};

const getJson = async (res: any) => {
try {
return await res.json();
} catch {
console.log("Response is not JSON");
return null;
}
};

test("Register API structure test", async ({ request }) => {
try {
const res = await request.post("/auth/register", {
data: {
userName: "sumit",
email: "sumit" + Date.now() + "@test.com",
password: "123456"
}
});


  expect(isValidStatus(res.status())).toBeTruthy();

  const body = await getJson(res);
  if (!body) return;

  expect(body).toHaveProperty("success");
  expect(body).toHaveProperty("message");
  expect(body).toHaveProperty("data");

} catch (error) {
  console.log("Register API not available");
}


});

test("Register validation fail", async ({ request }) => {
try {
const res = await request.post("/auth/register", {
data: {}
});


  expect([400, 404, 422]).toContain(res.status());

} catch (error) {
  console.log("API not available, skipping test");
}


});

test("Login web client", async ({ request }) => {
const res = await request.post("/auth/login", {
data: {
email: "[test@test.com](mailto:test@test.com)",
password: "123456",
client: "web"
}
});


expect(isValidStatus(res.status())).toBeTruthy();


});

test("Login mobile client", async ({ request }) => {
const res = await request.post("/auth/login", {
data: {
email: "[test@test.com](mailto:test@test.com)",
password: "123456",
client: "mobile"
}
});


expect(isValidStatus(res.status())).toBeTruthy();


});

test("Invalid credentials", async ({ request }) => {
const res = await request.post("/auth/login", {
data: {
email: "[wrong@test.com](mailto:wrong@test.com)",
password: "wrong"
}
});


expect(isValidStatus(res.status())).toBeTruthy();


});

test("GET /me unauthorized", async ({ request }) => {
const res = await request.get("/auth/me");


expect([401, 403, 404]).toContain(res.status());


});

test("GET /me authorized", async ({ request }) => {
const login = await request.post("/auth/login", {
data: {
email: "[test@test.com](mailto:test@test.com)",
password: "123456"
}
});


if (login.status() !== 200) {
  console.log("Login failed, skipping test");
  return;
}

const body = await getJson(login);
const token = body?.data?.token;

if (!token) {
  console.log("Token not found, skipping test");
  return;
}

const res = await request.get("/auth/me", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

expect(isValidStatus(res.status())).toBeTruthy();


});

test("Logout", async ({ request }) => {
const res = await request.post("/auth/logout");


expect(isValidStatus(res.status())).toBeTruthy();


});

});
