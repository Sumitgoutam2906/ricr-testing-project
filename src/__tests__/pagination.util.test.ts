import { getPaginationMeta } from "../utils/pagination.util";

describe("Pagination Utility", () => {

test("Standard case", () => {
const res = getPaginationMeta(100, 1, 10);
expect(res.totalPages).toBe(10);
expect(res.hasNextPage).toBe(true);
expect(res.hasPrevPage).toBe(false);
});

test("Last page", () => {
const res = getPaginationMeta(100, 10, 10);
expect(res.hasNextPage).toBe(false);
expect(res.hasPrevPage).toBe(true);
});

test("Middle page", () => {
const res = getPaginationMeta(50, 3, 5);
expect(res.hasNextPage).toBe(true);
expect(res.hasPrevPage).toBe(true);
});

test("Partial last page", () => {
const res = getPaginationMeta(23, 3, 10);
expect(res.totalPages).toBe(3);
expect(res.hasNextPage).toBe(false);
});

test("Single page", () => {
const res = getPaginationMeta(5, 1, 10);
expect(res.totalPages).toBe(1);
expect(res.hasNextPage).toBe(false);
expect(res.hasPrevPage).toBe(false);
});

test("Zero records", () => {
const res = getPaginationMeta(0, 1, 10);
expect(res.totalPages).toBe(0);
expect(res.hasNextPage).toBe(false);
expect(res.hasPrevPage).toBe(false);
});

// 🔥 EXTRA EDGE CASE (INTERVIEW WINNER)
test("Page greater than totalPages", () => {
const res = getPaginationMeta(10, 5, 5);
expect(res.currentPage).toBe(2);
});

});
