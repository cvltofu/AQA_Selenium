import BaseElement from '../BaseElement.js';
import BrowserHandler from '../../Utils/BrowserHandler.js';
import FrameContainer from '../../../Framework/Core/Elements/FrameContainer.js';

export default class Frame extends BaseElement {
    constructor(selector, elem, name) {
        super(selector, name);
        this.elem = elem;
    }

    async switchToFrame(frameLocator) {
        await BrowserHandler.switchToFrame(frameLocator);
    }

    async exitFrame() {
        await BrowserHandler.switchToDefaultContent();
    }

    async getFrameText() {
        await this.switchToFrame(await this.getElement());
        
        const frameElem = new FrameContainer(this.elem, 'frame container');
        const frameText = await frameElem.getText();

        await this.exitFrame();

        return frameText;
    }
}
