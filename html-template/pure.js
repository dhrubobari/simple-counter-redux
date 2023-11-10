// topic: understanding reducer
const state = {
    value: 5
}

function impure(){
    state.value = state.value * 2;
}

impure(2); // 10
impure(2); // 20
console.log(state.value);
