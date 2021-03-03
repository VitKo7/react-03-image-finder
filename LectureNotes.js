import React, { Component } from "react";

export default class App extends Component {

  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

  
  static defaultProps = {
    open: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filter: "",
      status: "",
      modal: true,
    };
  }

  componentDidMount() {
    console.log("COMPONENT_DID-MOUNT");

    const items = localStorage.getItem("todos");
    const parsedItems = JSON.parse(items);

    //  // if(items !== undefined && items !== null ) /the same as:
    //  if (items && parsedItems && parsedItems.length) {
    //    this.setState({ items: parsedItems });
    //  }

    if (items) {
      this.setState({ items: parsedItems });
    }
  }

  componentDidUpdate(_, prevState) {
    console.log("COMPONENT_DID-UPDATE");

    const oldItems = prevState.items;
    const newIems = this.state.items;

    if (oldItems !== newIems) {
      console.log("TODOS CHANGES");
      localStorage.setItem("todos", JSON.stringify(newIems));
    }
  }


  handleToggleModal = () => {
    this.setState((prevState) => { modal: !prevState.modal })
  }

  render() {
    const { items, filter, status,  } = this.state

    return <div>

<Modal></Modal>

    </div>;
  }
}


---------------------------//----------------------------

export default class App extends Component {

  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

  
  static defaultProps = {
    open: false,
  }

  componentDidMount() {
  window.addEventListener("keydown" this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }
  
  handleKeyDown = (event) { 
    if (event.code === 'Escape') { 
      // console.log('[MODAL_CLOSED_BY_KEY]' event.code);
      this.props.onClose && this.props.onClose()
    }
  }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}
