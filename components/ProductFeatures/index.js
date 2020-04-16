import React from 'react';
import {
  Container,
  Table,
  TableRow,
  Section,
  AddToCartButton,
  CartLogo,
  CartItems,
} from './index.styled';

const ProductFeatures = (
  {
    product,
    filters,
  },
) => {
  const {
    itemCode,
    customBrand,
    detailedColor,
    uColor,
    length,
    height,
    width,
    volume,
    weight,
    depth,
    seatHeight,
    chairBackHeight,
    armRestHeight,
    lengthUnitMsr,
    heightUnitMsr,
    widthUnitMsr,
    weightUnitMsr,
    volumeUnitMsr,
    seatHeightUnitMsr,
    depthUnitMsr,
    armRestHeightUnitMsr,
    chairBackHeightUnitMsr,
  } = product;
  return (
    <Container noBorder>
      <Section>
        <AddToCartButton>
          <CartItems>10</CartItems>
          <CartLogo />
          AGREGAR AL CARRITO
        </AddToCartButton>
      </Section>
      <Section>
        <h4><strong>CARACTERISTICAS</strong></h4>
        <Table>
          <tbody>
            <TableRow>
              <td>Código:</td>
              <td><strong>{itemCode}</strong></td>
            </TableRow>
            <TableRow>
              <td>Marca:</td>
              <td><strong>{customBrand}</strong></td>
            </TableRow>
            {filters && filters.map((filter) => (
              <TableRow>
                {filter.Values.length > 0 && filter.Handle !== 'color' && filter.Handle !== 'ubicacion-uso' && (
                  <td>
                    {`${filter.Name}:`}
                  </td>
                )}
                {filter.Values.length > 0 && filter.Handle !== 'color' && filter.Handle !== 'ubicacion-uso' && (
                  <td>
                    {filter.Values.map((value) => (
                      <strong>
                        {`${value.Name},`}
                      </strong>
                    ))}
                  </td>
                )}

              </TableRow>
            ))}
            <TableRow>
              <td>Color:</td>
              <td><strong>{detailedColor || uColor}</strong></td>
            </TableRow>
          </tbody>
        </Table>
      </Section>
      {(
        length
        || height
        || width
        || volume
        || weight
        || depth
        || seatHeight
        || chairBackHeight
        || armRestHeight) && (
          <Section>
            <h4><strong>DIMENSIONES</strong></h4>
            <Table>
              <tbody>
                {length && (
                  <TableRow>
                    <td>Largo:</td>
                    <td>
                      <strong>
                        {length.toFixed(2)}
                        {' '}
                        {lengthUnitMsr}
                      </strong>
                    </td>
                  </TableRow>
                )}
                {width && (
                  <TableRow>
                    <td>Ancho:</td>
                    <td>
                      <strong>
                        {width.toFixed(2)}
                        {' '}
                        {widthUnitMsr}
                      </strong>
                    </td>
                  </TableRow>
                )}
                {height && (
                  <TableRow>
                    <td>Alto:</td>
                    <td>
                      <strong>
                        {height.toFixed(2)}
                        {' '}
                        {heightUnitMsr}
                      </strong>
                    </td>
                  </TableRow>
                )}
                {volume && (
                  <TableRow>
                    <td>Volumen:</td>
                    <td>
                      <strong>
                        {volume.toFixed(2)}
                        {' '}
                        {volumeUnitMsr}
                      </strong>
                    </td>
                  </TableRow>
                )}
                {weight && (
                  <TableRow>
                    <td>Peso:</td>
                    <td>
                      <strong>
                        {weight.toFixed(2)}
                        {' '}
                        {weightUnitMsr}
                      </strong>
                    </td>
                  </TableRow>
                )}
                {depth && (
                  <TableRow>
                    <td>Profundidad:</td>
                    <td>
                      <strong>
                        {depth.toFixed(2)}
                        {' '}
                        {depthUnitMsr}
                      </strong>
                    </td>
                  </TableRow>
                )}
                {seatHeight && (
                  <TableRow>
                    <td>Altura asiento:</td>
                    <td>
                      <strong>
                        {seatHeight.toFixed(2)}
                        {' '}
                        {seatHeightUnitMsr}
                      </strong>
                    </td>
                  </TableRow>
                )}
                {chairBackHeight && (
                  <TableRow>
                    <td>Altura respaldo:</td>
                    <td>
                      <strong>
                        {chairBackHeight.toFixed(2)}
                        {' '}
                        {chairBackHeightUnitMsr}
                      </strong>
                    </td>
                  </TableRow>
                )}
                {armRestHeight && (
                  <TableRow>
                    <td>Altura reposa brazos:</td>
                    <td>
                      <strong>
                        {armRestHeight.toFixed(2)}
                        {' '}
                        {armRestHeightUnitMsr}
                      </strong>
                    </td>
                  </TableRow>
                )}
              </tbody>
            </Table>
          </Section>

        )}
    </Container>
  );
};
export default ProductFeatures;
