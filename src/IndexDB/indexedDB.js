if ((window.indexedDB)) {
    console.log('====================================');
    console.log("supported");
    console.log('====================================');
}
export const request = indexedDB.open("todo", 3)
request.onerror = (e) => {
    console.log('====================================');
    console.log(e.target.error);
    console.log('====================================');
}
request.onsuccess = (e) => {
    const db = e.target.result
    console.log('====================================');
    console.log(db);
    console.log('====================================');
   
}
request.onupgradeneeded = (e) => {
    const tasksData = [];
    const db = e.target.result;
    const objectStore = db.createObjectStore("tasks", { keyPath: "id" });
    objectStore.createIndex("task", "task", { unique: false });
    objectStore.transaction.oncomplete = (event) => {
        // Store values in the newly created objectStore.
        const tasksObjectStore = db.transaction("tasks", "readwrite").objectStore("tasks");
        tasksData.forEach(function (tasks) {
            tasksObjectStore.add(tasks);
        });
    };
};


