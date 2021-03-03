import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import { fetchPictures } from '../services/pictureAPI';
import ImageGallery from './imageGallery/ImageGallery';
import Button from '../shared/button/Button';
import Loader from '../shared/loader/Loader';
import Modal from '../shared/modal/Modal';

export default class App extends Component {
  state = {
    pictures: [],
    search: '',
    page: 1,
    isLoading: false,
    showModal: false,
    largeImage: '',
    imgTags: '',
  };

  componentDidMount() {
    fetchPictures()
      .then(data => {
        this.setState({ pictures: [...data.hits] });
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  bigImage = ({ target }) => {
    const { largeimg, tag } = target.dataset;
    this.setState({
      largeImage: largeimg,
      imgTags: tag,
    });
    this.toggleModal();
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = ({ search }) => {
    this.setState({ isLoading: true });
    if (!search.length) {
      alert(`Please, fill in the search form`);
    } else {
      this.setState({ search });

      fetchPictures(search)
        .then(data => {
          this.setState({
            pictures: [...data.hits],
            page: 2,
            isLoading: false,
          });
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  };

  showMore = () => {
    this.setState({ isLoading: true });
    fetchPictures(this.state.search, this.state.page)
      .then(data => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  // * ---------------------------- MARKUP ----------------------------
  render() {
    const { pictures, isLoading, showModal, largeImage, imgTags } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery pictures={pictures} bigImage={this.bigImage} />

        {isLoading ? (
          <Loader />
        ) : (
          this.state.page !== 1 && <Button onClick={this.showMore} />
        )}

        {showModal && (
          <Modal showModal={this.toggleModal}>
            <img src={largeImage} alt={imgTags} />
          </Modal>
        )}
      </div>
    );
  }
}
