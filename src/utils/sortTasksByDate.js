export default function sortTasksByDate(tasks) {
    return tasks
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
