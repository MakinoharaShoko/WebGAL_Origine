import Dialog from "./sentence/dialog";
import Bg from "./sentence/bg";
import Bgm from "./sentence/bgm";
import ChangeScene from "./sentence/changeScene";
import {Plan} from "@icon-park/react";
import PlayVideo from "./sentence/playVideo";

const sentenceMap = (sentence, index) => {
    let temp;
    switch (sentence.type) {
        case 'dialog':
            temp = <Dialog data={sentence} index={index} key={index}/>;
            break;
        case 'bg':
            temp = <Bg data={sentence} index={index} key={index}/>;
            break;
        case 'bgm':
            temp = <Bgm data={sentence} index={index} key={index}/>;
            break;
        case 'changeScene':
            temp = <ChangeScene data={sentence} index={index} key={index}/>;
            break;
        case 'video':
            temp = <PlayVideo data={sentence} index={index} key={index}/>;
            break;
    }
    return temp;
}

export default sentenceMap;