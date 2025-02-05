let notes = [
    {
        id: '1',
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: '2',
        title: "Functional Component",
        body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: '3',
        title: "Modularization",
        body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: '4',
        title: "Lifecycle",
        body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: '5',
        title: "ESM",
        body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
    {
        id: '6',
        title: "Module Bundler",
        body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
        createdAt: '2022-04-14T04:27:34.572Z',
        archived: false,
    },
];

function getNotes() {
    return notes;
}

function addNote(note) {
    notes = [...notes, {
        id: new Date().getTime().toString(),
        createdAt: new Date().toISOString(),
        archived: false,
        ...note
    }
    ];
}

function deleteNote(noteId) {
    notes = notes.filter(note => note.id !== noteId);
}

function archiveNote(noteId) {
    notes = notes.map((note) =>
        note.id === noteId ? {...note, archived: true} : note
    );
}

function unArchiveNote(noteId) {
    notes = notes.map((note) =>
        note.id === noteId ? {...note, archived: false} : note
    );
}

function filterNotes(notes, filter) {
    if (filter === 'archived') {
        return notes.filter(note => note.archived);
    }
    if (filter === 'unarchived') {
        return notes.filter(note => !note.archived);
    }
    return notes;
}

const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return new Date(date).toLocaleDateString("id-ID", options);
};

export {getNotes, addNote, deleteNote, archiveNote, unArchiveNote, showFormattedDate, filterNotes};
