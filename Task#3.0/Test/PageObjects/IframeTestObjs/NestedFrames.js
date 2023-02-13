import BaseForm from '../../../Framework/Core/BaseForm.js';
import Frame from '../../../Framework/Core/Elements/Frame.js';
import FrameContainer from '../../../Framework/Core/Elements/FrameContainer.js';

export default class NestedFrames extends BaseForm {
    constructor() {
        super('//div[@id="frame1Wrapper"]');
        this._outsideFramePath = '//iframe[@id="frame1"]';
        this._insideFramePath = '//iframe';
        this._framesElemPath = '//body';
    }

    async getOutsideFrameText() {
        const outsideFrame = new Frame(
            this._outsideFramePath,
            this._framesElemPath,
            'outside nested frame'
        );

        return await outsideFrame.getFrameText();
    }

    async getInsideFrameText() {
        const outsideFrame = new Frame(this._outsideFramePath, 'outside nested frame');
        await outsideFrame.switchToFrame(await outsideFrame.getElement());

        const insideFrame = new Frame(this._insideFramePath, 'inside nested frame');
        await insideFrame.switchToFrame(await insideFrame.getElement());

        const insideFrameElem = new FrameContainer(this._framesElemPath, 'inside nested frame container');
        const insideFrameText = await insideFrameElem.getText();

        await insideFrame.exitFrame();
        await outsideFrame.exitFrame();

        return insideFrameText;
    }
};
