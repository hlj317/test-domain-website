<template>
    <section class="a-dialog">
        <div class="a-model">
            <div class="a-model-inner">
                <div class="a-model-tips">
                    <div class="a-model-tip-item" v-for="(item, index) in tips" :key="index">
                        <span v-html="item"></span>
                    </div>
                </div>
                <div class="a-btn J_copy-btn" data-clipboard-target="#clipboard-command" @click="onsubmit(price)">{{btntext}}</div>
            </div>
            <div class="a-model-close" @click="onclose"></div>
        </div>
    </section>
</template>

<style lang="less">
    @import "~src/common/less/common.less";
    @closeBtnUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMDU5MkNGMzY4NjcxMUU4QjMyMzhDMUJERUVCNjM5MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMDU5MkNGNDY4NjcxMUU4QjMyMzhDMUJERUVCNjM5MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEwNTkyQ0YxNjg2NzExRThCMzIzOEMxQkRFRUI2MzkxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwNTkyQ0YyNjg2NzExRThCMzIzOEMxQkRFRUI2MzkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XPv1DwAAA+VJREFUeNrEWF1IFFEUPi6SRqVJUCgrSFppWfgi/Wj2YyaGZVEgFJUQgm1kFAk9BCX00IMYWK7RfxJFkg9mLJFKGaZUD0plJRkYLkVB2Krgz8t2Dp5t7oyzO3NnbD3wPdyZOfd8c8+95+dG+AtKwYLEIbYiNiNWIlYg5iNiET7EKKIP8RHRjmhDDMkaiZAkl48oQxQgoiT0JhBPEXWIZwi/GSWHycnXI96wgd2SxIC/L2L91zyfbXLRiFrEK0QmzIxk8ny1PL8lcomILoSL3A8zKxE8bxfbkSKXxn+XAf9XMthOmllyTt60iRAeSWR7Tu2LSJ091qz3IbiKAVKTlbHnBW7vTmPTFSVoPkEZN3gAOnr0FqSZD8p4sJWrCurKX78BUpIUHNxjTCwbp9qyQdFxxgN4f4ZycVUwt67jTaovj1oxCHQLYTh2ajVDScle9bj6JsDAj1AaLjHMOITTU2N4KmvuAXwX/rwwF2DNsiBmkHjCEmX8pE3PnXqn+JKW3HZTcWxoBAnW466YUJ6VH5r+HREm4gGhH3I/NHtA1iLyRHJlps/Wuy8ATS3KmFZH616RMP3IBbfsCXYFyFES3yGlevcxQP+AvnsP71K7836T0T7TE+ITR+Ro/edIR6dzl6e7lwgW5SnP3n+eOkjyQnxyiVyOpdBJ++/aA7V7z5djpIxS3Hnxup3gnEPk0i2rUxB+LgTi6Ch12KAfsC7pRC7FVvK50YgkfOpnFA+Nw4aRJDu4erUuq5KnArIoy5fiswV2yS0kcjGW1YnAqSM6z5HsmVK75GKI3LBldSIg7jMxva1OBdi3zQ65YQc3JPJC8YwIiOmpsk6d3vZjZZ4Ub5XcHyLXL62mjWcUkAPpidKbeHrPuqyS+0rkPkirUcAV41n1bXV6o1UMld7MSS+ReymlQsWjmJ4oz2rTE62itnrJlq742x3c8E6a+jxQPIrupDyrW17Vq8dHD8iEF+LT5uBO3CMdNrTu1KteRPfKhRfiMxQoma4afl55XB02WjuMqw2te+l00yk3FrdYz1H38zZk2KAe4F/S95kvHu80qsfFhUbhhW4WWsTui+4uTnAPOb1U7/4EMG+u4LI+89uacuytBoDFi5RnvtFgXxOPk8Eucq4gjsHsiVu0r20NKxA9s0SM7J4O1fGPIXYivGEm5mW7Y0bXEV7uxgbDRGyQ7XnNXuTgCYCsMLiY5t/I9qSuwAa5+3aDyZtICfHzvDT/N6uXh+N8erI4/syE0DzZPO+41ctDUbq4E6e9gY0oTEgSmmS9fJ6n04xSpKSRFkYc97ubqIsA5TadSv4RBkXqXrBxm/5XgAEAaX0GRySpKTAAAAAASUVORK5CYII=';
    @ruleCloseUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAJ1BMVEVHcEwqMj4rMkAwQEAsM0CAgIArNUAqND4wOEAzM00pMz0sMz0sM0CdfDa3AAAADXRSTlMAgHAQUAIwMSAKGUto7l7b2QAAAIhJREFUOMvd1EESgCAIBVBFK7Xuf94ma4rUD2zL3Ze3cAbQud+duAVUmlZitc0TkFP0vjwxEJCHm/kFkJ0DcuCGcugGErhOQtdIwb2k6JhU3C1Vd0mDO6XFVWly9X0UjM4gD7cEXVYnzGfjVHk7RTInyqYfv98jt4p7lJ9I4h4llgpuV06f+ZR3opkDW3zCUzsAAAAASUVORK5CYII=';
    .a {
        &-dialog {
            position: fixed;
            top: 0;
            left: 0;
            font-size: 24/@b;
            z-index: 10;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
        }
        &-model {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 640/@b;
            background: #fff;
            border-radius: 12/@b;
        }
        &-model-tips {
            box-sizing: border-box;
            padding-top: 36/@b;
            padding-left: 36/@b;
            border-bottom: 1px solid #ccc;
        }
        &-model-tip-item {
            margin-bottom: 28/@b;
            em {
                color: #ec5869;
            }
        }

        &-btn {
            height: 75/@b;
            line-height: 75/@b;
            text-align: center;
            background: #ec5869;
            border-radius: 0 0 12/@b 12/@b;
            color: #fff;
            font-size: 28/@b;
            font-weight: 600;
        }
        &-model-close {
            position: absolute;
            top: -15/@b;
            right: -15/@b;
            width: 40/@b;
            height: 40/@b;
            background: url(@closeBtnUrl) no-repeat;
            background-size: cover;
        }
    }
    
</style>

<script>
import Clipboard from 'clipboard';
export default {
    data: () => ({
        price: '',
    }),
    methods: {

    },
    mounted() {
        // ??????????????????????????????
        if (this.btntext === '????????????APP' || this.btntext === '??????APP') {
            let copyStr = '??????';
            let clipboard = new Clipboard('.J_copy-btn');
            console.log('??????')
            clipboard.on('success', (e) => {
                console.log('????????????')
                return undefined;
            });
            clipboard.on('error', () => {
                console.log('????????????')
            });
        }
    },
    props: [
        'tips',
        'onsubmit',
        'onclose',
        'btntext'
    ]
}
</script>
