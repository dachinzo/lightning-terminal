import React from 'react';
import { observer } from 'mobx-react-lite';
import { usePrefixedTranslation } from 'hooks';
import { useStore } from 'store';
import { Minimize } from 'components/common/icons';
import { Title } from 'components/common/text';
import { styled } from 'components/theme';
import ProcessingSwapRow from './ProcessingSwapRow';

const Styled = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    min-height: 360px;
    padding: 40px;
    background-color: ${props => props.theme.colors.darkBlue};
    border-radius: 35px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  `,
  MinimizeIcon: styled(Minimize)`
    display: inline-block;
    padding: 4px;
    cursor: pointer;

    &:hover {
      border-radius: 24px;
      background-color: ${props => props.theme.colors.purple};
    }
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

const ProcessingSwaps: React.FC = () => {
  const { l } = usePrefixedTranslation('cmps.loop.processing.ProcessingSwaps');
  const { swapStore, uiStore } = useStore();

  const { Wrapper, Header, MinimizeIcon, Content } = Styled;
  return (
    <Wrapper>
      <Header>
        <Title>{l('title')}</Title>
        <MinimizeIcon onClick={uiStore.toggleProcessingSwaps} />
      </Header>
      <Content>
        {swapStore.processingSwaps.map(swap => (
          <ProcessingSwapRow key={swap.id} swap={swap} />
        ))}
      </Content>
    </Wrapper>
  );
};

export default observer(ProcessingSwaps);