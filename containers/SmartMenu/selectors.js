import { createSelector } from 'reselect';
import _ from 'underscore';

const containerSelector = (state) => state.containers.SmartMenu;

const CF_URL = `${process.env.cdnUrl}/uploads/products/`;
const sortList = [
  {
    name: 'salas',
    childs: [
      'salas-esquineras',
      'salas-modulares',
      'sofas',
      'sofa-cama',
      'futon',
      'sillones',
      'sillones-reclinables',
      'salas-de-cine',
      'taburete',
      'salas-para-jardin',
      'mesas-de-centro',
      'mesas-laterales',
      'credenzas',
    ],
  },
  {
    name: 'comedores',
    childs: [
      'mesas-de-comedor',
      'sillas-para-comedor',
      'bancos-para-barra',
      'bufeteras',
    ],
  },
  {
    name: 'sillas',
    childs: [
      'sillas-para-comedor',
      'sillas-para-oficina',
      'sillas-para-jardin',
      'bancos-para-barra',
    ],
  },
  {
    name: 'recamaras',
    childs: [
      'camas',
      'cabeceras',
      'bases-para-cama',
      'futon',
      'sofa-cama',
      'comoda',
      'buros',
      'colchones',
    ],
  },
  {
    name: 'muebles-de-jardin',
    childs: [
      'salas-para-jardin',
      'sillones-para-exterior',
      'mesas-para-jardin',
      'sillas-para-jardin',
      'camastro',
      'sombrillas',
    ],
  },
  {
    name: 'muebles-para-oficina',
    childs: ['escritorios', 'sillas-para-oficina', 'libreros'],
  },
  {
    name: 'muebles-de-tv',
    childs: [
      'muebles-para-tv',
      'centro-de-entretenimiento',
      'sillones-reclinables',
      'sillones',
      'salas-de-cine',
    ],
  },
];


function filterMenuSubCategories(item) {
  return item && item[this] > 0;
}
const propsSelector = createSelector(
  [containerSelector],
  (containerState) => {
    const activeStoreCode = 'actual_studio';
    const allCategories = containerState.get('categoriesTree');
    const tree = allCategories.filter((item) => (
      item
      && !item.onKidsMenu
      && item.Childs
      && item.Childs.length > 0
      && item.Childs.some((child) => child[activeStoreCode] > 0)
    ));
    const groupsLevel1 = _.groupBy(tree, 'Handle');
    const plainSortList = sortList.map((sortItem) => sortItem.name);
    const remaining = tree.filter((item) => plainSortList.indexOf(item.Handle) <= -1);

    const sortedTree = _.map(sortList, (sortItem) => {
      if (groupsLevel1[sortItem.name] && groupsLevel1[sortItem.name][0]) {
        const childsGroups = _.groupBy(
          groupsLevel1[sortItem.name][0].Childs,
          'Handle',
        );
        const childsRemaining = groupsLevel1[sortItem.name][0].Childs.filter(
          (childItem) => sortItem.childs.indexOf(childItem.Handle) <= -1,
        );
        const childsSorted = sortItem.childs
          .reduce((acum, sortChildItem) => {
            if (childsGroups[sortChildItem]) {
              acum.push(childsGroups[sortChildItem].shift());
            }
            return acum;
          }, [])
          .concat(childsRemaining);

        groupsLevel1[sortItem.name][0].Childs = childsSorted.filter(
          filterMenuSubCategories,
          activeStoreCode,
        );
      }
      if (groupsLevel1[sortItem.name]) {
        return groupsLevel1[sortItem.name][0];
      }
      return null;
    });

    const finalSortedTree = sortedTree.concat(remaining).filter((item) => item);
    const filteredFeaturedProducts = finalSortedTree.reduce((acum, category) => {
      const cat = category;
      if (category.FeaturedProducts.length) {
        cat.FeaturedProducts = category.FeaturedProducts.filter((FeaturedProduct) => FeaturedProduct.Active === 'Y' && FeaturedProduct[activeStoreCode] > 0).slice(0, 2);
        cat.featuredImages = cat.FeaturedProducts.map((product) => CF_URL + product.icon_filename);
        // add icon
        cat.image = 'https://via.placeholder.com/300';
        acum.push(cat);
      }
      return acum;
    }, []);
    return {
      loading: containerState.get('loading'),
      categoriesTree: filteredFeaturedProducts,
    };
  },
);


export default propsSelector;
