import axios from 'axios';

const API_SH = 'https://api.actualstudio.com';
const API_K = 'https://apikidsweb.miactual.com';
const site = process.env.siteOption;

const API_BASE = site === 'kids' ? API_K : API_SH;
axios.defaults.baseURL = API_BASE;

const get = (url, params = {}) => axios.get(url, { params });
// const put = (url, params = {}) => axios.put(url, params);
const post = (url, params = {}) => axios.post(url, params);
// const destroy = (url, params = {}) => axios.delete(url, params);

export default {
  API_BASE,
  site: {
    banners: {
      get: () => get(`/site/banners/${process.env.activeSite}`)
    },
    featuredProducts: {
      get: () => get(`/featuredproduct/${process.env.siteId}`)
    }
  },
  categoriesTree: {
    get: () => get('/productcategory/getcategoriestree'),
    getCategoryChildsRelations: (handle) => {
      const url = `/productcategory/childsrelations/${handle}`;
      return post(url).then((res) => {
        const relations = (res.data || []).filter((relation) => (
          relation.position ? relation : false
        ));
        return relations.sort((relationA, relationB) => relationA.position - relationB.position);
      });
    },
  },
};
