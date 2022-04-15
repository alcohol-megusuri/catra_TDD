describe 'ClosedSpaceクラス' do
    describe '閉区間が適切な値を返す' do
        context '上端点が下端点より大きい場合' do
            context '下端点が3、上端点が7の場合' do
                let(:closed_space) { ClosedSpace.new(3, 7) }

                it '下端点3を返す' do
                    expect(closed_space.lower_endpoint_point).to eq 3
                end

                it '上端点7を返す' do
                    expect(closed_space.upper_endpoint_point).to eq 7
                end

                it "整数閉区間の文字列表記'[3,7]'を返す" do
                    expect(closed_space.to_interval).to eq '[3,7]'
                end
            end
        end

        context '下端点と上端点が同じ場合' do
            context '下端点、上端点が両方3の場合' do
                let(:closed_space) { ClosedSpace.new(3, 3) }

                it '下端点3を返す' do
                    expect(closed_space.lower_endpoint_point).to eq 3
                end

                it '上端点3を返す' do
                    expect(closed_space.upper_endpoint_point).to eq 3
                end

                it "整数閉区間の文字列表記'[3,3]'を返す" do
                    expect(closed_space.to_interval).to eq '[3,3]'
                end
            end
        end

        context '下端点が上端点より大きい場合' do
            context '下端点が7、上端点が3の場合' do
                it 'エラーが出て閉区間[7,3]を生成できない' do
                    expect { ClosedSpace.new(7, 3) }.to raise_error(StandardError, '下端点は上端点以下の整数を入力して下さい')
                end
            end
        end
    end

    describe '閉区間に整数が含まれているか判定する' do
        let(:closed_space) { ClosedSpace.new(3, 7) }

        it '閉区間[3,7]に整数2が含まれていない' do
            expect(closed_space.include?(2)).to eq false
        end

        it '閉区間[3,7]に整数3が含まれている' do
            expect(closed_space.include?(3)).to eq true
        end

        it '閉区間[3,7]に整数7が含まれている' do
            expect(closed_space.include?(7)).to eq true
        end

        it '閉区間[3,7]に整数8が含まれていない' do
            expect(closed_space.include?(8)).to eq false
        end
    end

    describe '閉区間同士を比較する' do
        let(:closed_space) { ClosedSpace.new(3, 7) }

        describe 'ある閉区間が他の閉区間と一致するか判定する' do
            context 'ある閉区間が[3,7]、他の閉区間が[3,7]の場合' do
                let(:other_closed_space) { ClosedSpace.new(3, 7) }

                it 'ある閉区間[3,7]と他の閉区間[3,7]が一致する' do
                    expect(closed_space.equal?(other_closed_space)).to eq true
                end
            end

            context 'ある閉区間が[3,7]、他の閉区間が[1,7]の場合' do
                let(:other_closed_space) { ClosedSpace.new(1, 7) }

                it 'ある閉区間[3,7]と他の閉区間[1,7]が一致しない' do
                    expect(closed_space.equal?(other_closed_space)).to eq false
                end
            end
        end

        describe 'ある閉区間が他の閉区間を完全に含んでいるか判定する' do
            context 'ある閉区間が[3,7]、他の閉区間が[4,6]の場合' do
                let(:other_closed_space) { ClosedSpace.new(4, 6) }

                it 'ある閉区間[3,7]が他の閉区間[4,6]を完全に含んでいる' do
                    expect(closed_space.completely_include?(other_closed_space)).to eq true
                end
            end

            context 'ある閉区間が[3,7]、他の閉区間が[3,7]の場合' do
                let(:other_closed_space) { ClosedSpace.new(3, 7) }

                it 'ある閉区間[3,7]が他の閉区間[3,7]を完全に含んでいる' do
                    expect(closed_space.completely_include?(other_closed_space)).to eq true
                end
            end

            context 'ある閉区間が[3,7]、他の閉区間が[1,7]の場合' do
                let(:other_closed_space) { ClosedSpace.new(1, 7) }

                it 'ある閉区間[3,7]が他の閉区間[1,7]を完全に含んでいない' do
                    expect(closed_space.completely_include?(other_closed_space)).to eq false
                end
            end

            context 'ある閉区間が[3,7]、他の閉区間が[3,8]の場合' do
                let(:other_closed_space) { ClosedSpace.new(3, 8) }

                it 'ある閉区間[3,7]が他の閉区間[3,8]を完全に含んでいない' do
                    expect(closed_space.completely_include?(other_closed_space)).to eq false
                end
            end
        end
    end
end