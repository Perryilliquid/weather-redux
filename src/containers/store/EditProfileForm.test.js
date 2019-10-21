import React from 'react';
import { shallow } from 'enzyme';
import EditProfileForm from './EditProfileForm';

describe('<EditProfileForm />', () => {
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
    component = shallow(<EditProfileForm ajaxStatus={{}} details={data} updateStoreProfile={() => {}} onClose={() => {}}/>);
  });

  it('should render modal properly', () => {
    expect(component.find('div.modal-body').exists());
  });

});