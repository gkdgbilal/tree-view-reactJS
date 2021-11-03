import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css"

export const Tree = ({ data = [] }) => {
    return (
        <div className="d-tree">
            <ul className="d-flex d-tree-container flex-column">
                {data.map(tree => (
                    <TreeNode node={tree} />
                ))}
            </ul>
        </div>
    )
}

const TreeNode = ({ node }) => {
    const [childVisible, setChildVisiblity] = useState(false)

    const hasChild = node.children ? true : false

    return (
        <li className="d-tree-node border-0" onClick={e => setChildVisiblity(v => !v)}>
            <div className="d-flex">
                {hasChild && (
                    <div className={`d-inline d-tree-toggler ${childVisible ? "active" : ""}`}>
                        <FontAwesomeIcon icon="caret-right" />
                    </div>
                )}

                <div className="col d-tree-head">
                    <i className={`mr-1 ${node.icon}`}></i>
                    {node.label}
                </div>
            </div>

            {
                hasChild && childVisible && <div className="d-tree-content">
                    <ul className="d-flex d-tree-container flex-column">
                        <Tree data={node.children} />
                    </ul>
                </div>
            }
        </li>
    )
}