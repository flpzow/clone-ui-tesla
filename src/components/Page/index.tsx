import DefaultOverlayContent from '../DefaultOverlayContent';
import ModelSection from '../Model/ModelSection';
import ModelsWrapper from '../Model/ModelsWrapper';
import { Container } from './styles';

export function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelname => (
            <ModelSection 
            key={modelname}
            className="colored" 
            modelName={modelname} 
            overlayNode={<DefaultOverlayContent label={modelname} description="Order Online for Touchless Delivery" />} 
            children={undefined}/>
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

