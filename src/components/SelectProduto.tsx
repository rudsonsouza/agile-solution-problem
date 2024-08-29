// components/SelectProduto.tsx
import React from 'react';

interface SelectProdutoProps {
    produtos: string[];
    produtoSelecionado: string;
    onProdutoChange: (produto: string) => void;
    disabled: boolean;
}

const SelectProduto: React.FC<SelectProdutoProps> = ({ produtos, produtoSelecionado, onProdutoChange, disabled }) => {
    return (
        <div>
            <label>Produto: </label>
            <select value={produtoSelecionado} onChange={(e) => onProdutoChange(e.target.value)} disabled={disabled}>
                <option value="">Selecione um Produto</option>
                {produtos.map((produto) => (
                    <option key={produto} value={produto}>
                        {produto}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectProduto;
