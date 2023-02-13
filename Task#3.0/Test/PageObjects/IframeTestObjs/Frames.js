import BaseForm from '../../../Framework/Core/BaseForm.js';
import Frame from '../../../Framework/Core/Elements/Frame.js';

export default class Frames extends BaseForm {
    constructor() {
        super('//div[@id="frame2Wrapper"]');
        this._upperFramePath = '//iframe[@id="frame1"]';
        this._lowerFramePath = '//iframe[@id="frame2"]';
        this._framesElemPath = '//body';
    }

    async getUpperFrameText() {
        const upperFrame = new Frame(
            this._upperFramePath,
            this._framesElemPath,
            'upper frame'
        );

        return await upperFrame.getFrameText();
    }

    async getLowerFrameText() {
        const lowerFrame = new Frame(
            this._lowerFramePath,
            this._framesElemPath,
            'lower frame'
        );

        return await lowerFrame.getFrameText();
    }
}
