import React, { useState } from 'react';
import {
    Row,
    Col,
    CardContent,
    Cell,
    Card,
    TextBoxBiggerTitle,
    TextBoxSubTitle,
    TextBoxBigTitle,
    TextBox,
    CellIcon,
    Button,
    detectDevice
} from '@sberdevices/plasma-ui';
import { IconNetwork, IconLocation, IconEye, IconDone, IconClose } from '@sberdevices/plasma-icons';
import axios from 'axios';

export const CheckPhonePage = ({phone, countViews, userId, countLike,  countDislike, positive, negative}: any) => {
    const [checkLike, setLike] = useState<boolean>(false)
    const [getCountLike, setCountLike] = useState<number>(countLike);
    const [getCountDislike, setCountDislike] = useState<number>(countDislike);
    const uuid = userId.replace(/\s/g, '')
    const uid = uuid.replace(/\\|\//g,'')
    const checkLikeUrl = "https://for-app.online/whocall/checkLike.php?phone="+phone.full_num+"&user_id="+uid;
    axios.get(checkLikeUrl).then((resp) => {
        const checkLikeGET = Number(resp.data);
        if (checkLikeGET!=0) {
            setLike(true)
        }
    })


    const onClickLike = () => {
        if (checkLike==false) {
            const addLikeUrl = "https://for-app.online/whocall/addLike.php?phone=" + phone.full_num + "&user_id=" + uid;
            axios.get(addLikeUrl).then((resp) => {
            })
            setCountLike(Number(getCountLike) + 1)
            setLike(true)
        }
    }

    const onClickDislike = () => {
        if (checkLike==false) {
            const addDislikeUrl = "https://for-app.online/whocall/addDislike.php?phone=" + phone.full_num + "&user_id=" + uid;
            axios.get(addDislikeUrl).then((resp) => {
            })
            setCountDislike(Number(getCountDislike) + 1)
            setLike(true)
        }
    }

    if (positive==true){
        onClickLike()
    } else if (negative==true) {
        onClickDislike()
    }
        const buttons = (detectDevice() == "mobile" ? <><Button text="Положительный" onClick={onClickLike} size="s"
                                                                view="primary" stretch/><br/><br/><Button
            text="Отрицательный" onClick={onClickDislike} size="s" view="critical" stretch/></> : <><Button
            text="Положительный" size="l" onClick={onClickLike} view="primary" pin="square-clear"/>
            <Button text="Отрицательный" onClick={onClickDislike} size="l" pin="clear-square" view="critical"/></>)

    const likeDone = <>Оценка номера уже поставлена</>

    return (
        <>
        <Row>
            <Col type="calc" sizeXL={4} sizeM={2} style={{margin: "0 auto", marginTop: "15px", width: "100%"}}>
                <Card style={{ width: "100%", margin: "0 auto" }}>
                    <CardContent compact>
                        <Cell
                            content={<TextBox><TextBoxBiggerTitle>Информация о номере</TextBoxBiggerTitle><TextBoxSubTitle>{phone.full_num}</TextBoxSubTitle></TextBox>}
                        /><br />
                        <Cell
                            contentLeft={<CellIcon><IconNetwork size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Оператор связи</TextBoxBigTitle><TextBoxSubTitle>{phone.operator}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        /><br />
                        <Cell
                            contentLeft={<CellIcon><IconLocation size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Город абонента</TextBoxBigTitle><TextBoxSubTitle>{phone.region}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        /><br />
                        {(phone.old_operator ? (
                        <Cell
                            contentLeft={<CellIcon><IconNetwork size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Старый оператор</TextBoxBigTitle><TextBoxSubTitle>{phone.operator}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />) : null )}
                        <Cell
                        contentLeft={<CellIcon><IconEye size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Количество просмотров</TextBoxBigTitle><TextBoxSubTitle>{countViews}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />
                        <Cell
                            contentLeft={<CellIcon><IconDone size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Положительных оценок</TextBoxBigTitle><TextBoxSubTitle>{getCountLike}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />
                        <Cell
                            contentLeft={<CellIcon><IconClose size="s" color="inherit" /></CellIcon>}
                            content={<TextBox><TextBoxBigTitle>Отрицательных оценок</TextBoxBigTitle><TextBoxSubTitle>{getCountDislike}</TextBoxSubTitle></TextBox>}
                            alignRight="center"
                        />
                    </CardContent>
                </Card>
            </Col>
        </Row>
        <Row>
                <Col type="calc" sizeXL={4} sizeL={4} sizeM={2} style={{margin: "0 auto", marginTop: "15px", width: "100%"}}>
                    {checkLike ? likeDone : buttons}
            </Col>
        </Row>
            <br /><br /><br /><br /><br />
            </>
    );
}

export default CheckPhonePage;