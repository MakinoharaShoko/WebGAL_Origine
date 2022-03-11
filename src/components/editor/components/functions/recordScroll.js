import runtime from "../../controller/runtime";

const recordScroll = () => {
    const currentSceneName = runtime.currentEditScene;
    if (currentSceneName !== '') {
        runtime.sceneScrollTop[runtime.currentEditScene] = document.getElementById('currentSentenceList').scrollTop;
    }
}

export default recordScroll;