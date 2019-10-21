import React from 'react';
import { shallow } from 'enzyme';
import { HomeContainer } from './HomeContainer';

describe('<HomeContainer />', () => {
  let component;
  const data = {
    id: 1,
    name: 'Gongcha',
    address: '45 Ho Tung Mau',
    city: "HCM",
    district: 'District 2',
    image: { key: 'sofa_cat', format: 'jpg'},
    phone: '1234568888',
    redInvoice: {
        name: 'Alley',
        address: '67 Le Loi',
        district: 'District 1',
        city: 'HCM',
        taxCode: 'P12351566'
    }
  };

  beforeEach(() => {
    component = shallow(<HomeContainer ajaxStatus={{}} profile={data} fetchProfileDetails={() => {}}/>);
  });

  it('should render store name', () => {
    expect(component.find('.name').text()).toEqual('Gongcha');
  });

  it('should render store address', () => {
    expect(component.find('.address').text()).toEqual('45 Ho Tung Mau District 2 HCM');
  });

  it('should render store phone no', () => {
    expect(component.find('.phone').text()).toEqual('1234568888');
  });

  it('should render company name', () => {
    expect(component.find('.company-name').text()).toEqual('Alley');
  });

  it('should render company address', () => {
    expect(component.find('.company-address').text()).toEqual('67 Le Loi District 1 HCM');
  });

  it('should render company tax code', () => {
    expect(component.find('.tax-code').text()).toEqual('P12351566');
  });
});