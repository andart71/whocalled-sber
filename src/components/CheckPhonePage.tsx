import React, { useState } from 'react';
import styled from 'styled-components';
import {Row, Col, CardContent, Cell, CellIcon, Card, TextBoxRoot, TextBoxTitle } from '@sberdevices/plasma-ui';

export const CheckPhonePage = ({phone}: any) => {
    return (
        <Row>
            <Col type="calc" sizeXL={4} sizeM={2} style={{margin: "0 auto", marginTop: "15px"}}>
                <Card style={{ margin: "0 auto" }}>
                    <CardContent compact>
                        <Cell
                            content={<TextBoxTitle>Перевод</TextBoxTitle>}
                        />
                        <Cell
                            contentLeft={
                                <CellIcon>
                                </CellIcon>
                            }
                            content={<TextBoxRoot>d</TextBoxRoot>}
                            alignRight="center"
                        />
                    </CardContent>
                </Card>
            </Col>
        </Row>
    );
}

export default CheckPhonePage;