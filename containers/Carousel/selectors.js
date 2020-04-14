import { createSelector } from 'reselect';

const containerSelector = (state) => state.containers.Carousel;

const CF_URL = `${process.env.cdnUrl}/uploads/sites/banners/`;
const propsSelector = createSelector(
  [containerSelector],
  (containerState) => {
    const bannerImgs = (containerState.get('photos') || []).filter(({ secondBanner }) => (
      secondBanner === false
    )).map(({ filename }) => (
      CF_URL + filename
    ))
    return {
      loading: containerState.get('loading'),
      imgs: bannerImgs
    };
  },
);


export default propsSelector;
