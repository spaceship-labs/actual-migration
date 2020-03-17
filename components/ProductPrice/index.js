/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import {
  ProductPriceContainer,
  DiscountBadge,
  Column,
  Row,
  CurrencyLabel,
  PriceLabel,
  QuantitiesContainer,
  Legend,
  Select,
} from './index.styled';

class ProductPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuantity: 1,
      selectedDate: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {
      product,
      mainPromo,
    } = this.props;
    const {
      selectedQuantity,
      selectedDate,
    } = this.state;
    return (
      <ProductPriceContainer>

        <Row>
          <Column>
            {mainPromo && (
            <DiscountBadge>
              {`- ${mainPromo.discountPg1 || 0}%`}
            </DiscountBadge>
            )}
          </Column>
        </Row>
        <Row>
          <Column leftAlign>
            <CurrencyLabel>MXN</CurrencyLabel>
            <PriceLabel className="product-view-price-crossed">
              {`$${product.priceBefore.toFixed(2)}`}
            </PriceLabel>
            <CurrencyLabel isRed>MXN</CurrencyLabel>
            <PriceLabel isRed>
              <strong>
                {`$${product.price.toFixed(2)}`}
              </strong>
            </PriceLabel>
          </Column>
          <Column>
            <div
              ng-if="!vm.zipcodeDelivery"
              ng-click="vm.setDeliveriesByStaticZipCode()"
              className="zipcode-layer"
            />
            <QuantitiesContainer>
              <label htmlFor="quantities">
                <Legend>Piezas</Legend>
                <Select
                  id="quantities"
                  disabled={product.available <= 0}
                  name="selectedQuantity"
                  value={selectedQuantity}
                  onChange={this.handleChange}
                >
                  {
                    product.available <= 0 && (<option value="0">No disponible</option>)
                  }
                  {
                    product.available > 0 && [...Array(product.available)].map((value, index) => (
                      <option
                        key={value}
                        value={index + 1}
                        className="select-element"
                      >
                        {index + 1}
                      </option>
                    ))
                  }
                </Select>
              </label>
            </QuantitiesContainer>
          </Column>
          <Column>
            <QuantitiesContainer>
              <label htmlFor="dates">
                <Legend>Entrega aproximada</Legend>
                <Select
                  id="dates"
                  name="selectedDate"
                  value={selectedDate}
                  onChange={this.handleChange}
                >
                  {
                    product.availableDates && product.availableDates.map((value) => (
                      <option
                        key={value}
                        className="select-element"
                      >
                        {value}
                      </option>
                    ))
                  }
                </Select>
              </label>
            </QuantitiesContainer>
          </Column>
          <Column leftAlign>
            <Legend>
              <strong>Total:</strong>
            </Legend>
            <CurrencyLabel isTotal>MXN</CurrencyLabel>
            <PriceLabel isTotal>
              <strong>
                {`$${(selectedQuantity * product.price).toFixed(2)}`}
              </strong>
            </PriceLabel>
            <Legend>Impuestos incluidos.</Legend>
          </Column>
        </Row>
      </ProductPriceContainer>
    );
  }
}

export default ProductPrice;
