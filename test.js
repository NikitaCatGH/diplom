
function pause500ms() {
    return new Promise((res) => setTimeout(res, 5000));
}


async function inSequence() {
    await pause500ms();
    await pause500ms();
    console.log("I will be logged after 2000ms");
}

async function inParallel() {
    const await1 = pause500ms();
    const await2 = pause500ms();
    await await1;
    await await2;
    console.log("I will be logged after 500ms");
}

inParallel();