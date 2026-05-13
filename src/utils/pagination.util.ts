export function getPaginationMeta(
total: number,
page: number,
limit: number
) {
if (limit <= 0) {
throw new Error("Limit must be greater than 0");
}

if (page <= 0) {
throw new Error("Page must be greater than 0");
}

const totalPages = total === 0 ? 0 : Math.ceil(total / limit);

const currentPage =
totalPages === 0 ? 0 : Math.min(page, totalPages);

return {
total,
totalPages,
currentPage,
limit,
hasNextPage: currentPage < totalPages,
hasPrevPage: currentPage > 1
};
}
