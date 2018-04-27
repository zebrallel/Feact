class FeactDOM {
    createChildren(targetNode, children) {
        if (children && children.length) {
            for (let i = 0; i < children.length; i++) {
                let nextNode = null

                switch (typeof children[i]) {
                    case 'string':
                        nextNode = document.createTextNode(children[i])
                        break
                    default:
                        nextNode = this.createRealNode(children[i])
                        break
                }

                targetNode.appendChild(nextNode)
            }
        }
    }
    createRealNode(element) {
        const node = document.createElement(element.tag)

        if (element.props) {
            Object.keys(element.props).map(key => {
                switch (key) {
                    case 'children':
                        this.createChildren(node, element.props['children'])
                        break
                    case 'className':
                        node.setAttribute('class', element.props['className'])
                        break
                    default:
                        node.setAttribute(key, value)
                        break
                }
            })
        }

        return node
    }
    render(element, container) {
        if (!element) {
            throw new Error('element can not be empty!')
        }

        if (!container) {
            throw new Error('container can not be empty')
        }

        container.innerHTML = ''
        container.appendChild(this.createRealNode(element))
    }
}

export default new FeactDOM()
