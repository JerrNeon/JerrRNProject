/**
 * Created by Administrator on 2017/2/14.
 */
import {Dimensions} from 'react-native';

export const deviceWidthDp = Dimensions.get('window').width;
export const deviceHeightDp = Dimensions.get('window').height;

export default function px2dp(uiElementPx) {
    return uiElementPx *  deviceHeightDp / uiHeightPx;
}