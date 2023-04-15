<script>
    // adds file to storage bucket
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, addDoc } from "firebase/firestore";
    import { getStorage, ref, uploadBytes, onSnapshot } from "firebase/storage";

    const firebaseConfig = {
        apiKey: "AIzaSyDmxG4o79Bvz8IfVJo2rKXIxMcV-08KCAQ",
        authDomain: "cardhub-backend.firebaseapp.com",
        projectId: "cardhub-backend",
        storageBucket: "cardhub-backend.appspot.com",
        messagingSenderId: "255952821694",
        appId: "1:255952821694:web:13d0e9a60f251ddd336def",
        measurementId: "G-47J21435HD",

        storageBucket: 'gs://cardhub-backend.appspot.com/'
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const storage = getStorage(app);
    const storageRef = ref(storage);
    const collectionRef = collection(db, 'cardhub-backend');

    // let photo;

    // function handleFileUpload(event) {
    //     const file = event.target.files[0];
    //     console.log(file);
    //     photo = file;
    //     uploadBytes(storageRef, file).then((snapshot) => {
    //         console.log('Uploaded a file');
    //     });
    // }

    let emptyCard = { name: "", description: "", photo: "" }; // json format
    let card = { ...emptyCard };
    let cards = [];

    const unsubscribe = onSnapshot(doc(db, "cardhub-backend"), (card) => {
        cards = card.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // maps each card in firestore to cards variable
    });

    async function onSubmit() {
        await addDoc(collection(db, cardhub))
        item = { ...emptyCard }; // reset the form
    }

    async function onDelete(id) {
        await db
    }

</script>

<form on:submit|preventDefault={onSubmit}>
    <!-- <input type="file" id="upload" on:change={handleFileUpload}>
    <img src="photo" alt="photo"> -->
    <input type="text" bind:value={card.name}>
    <input type="text" bind:value={card.description}>
    <!-- <input type="text" bind:value={card.name}> -->
</form>

<ul>
    {#each cards as card}
        <li>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
            <button on:click={() => onDelete(card.id)}>Delete</button>
        </li>
    {/each}
</ul>
